import { v4 as uuidv4 } from 'uuid';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export interface ChatMessage {
    id: number | string;
    text: string;
    sender: 'user' | 'bot';
    isTyping?: boolean;
}

class ChatService {
    private token: string | null;
    private userId: string | null;

    constructor() {
        this.token = localStorage.getItem('chat_token');
        this.userId = localStorage.getItem('chat_user_id');

        // Generate persistent ID if not exists
        if (!this.userId) {
            this.userId = uuidv4();
            localStorage.setItem('chat_user_id', this.userId);
        }
    }

    /**
     * Authenticates the user using a Turnstile token
     */
    async createSession(turnstileToken: string): Promise<boolean> {
        try {
            const response = await fetch(`${API_URL}/auth/session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: this.userId,
                    turnstile_token: turnstileToken
                })
            });

            if (!response.ok) {
                throw new Error('Falha na autenticação');
            }

            const data = await response.json();
            this.token = data.access_token;
            if (this.token) {
                localStorage.setItem('chat_token', this.token);
            }

            return true;
        } catch (error) {
            console.error('Erro ao criar sessão:', error);
            return false;
        }
    }

    /**
     * Sends a message to the chat API
     */
    async sendMessage(message: string, language: string = 'pt', history: any[] = []): Promise<any> {
        if (!this.token) {
            throw new Error('Sessão não iniciada. Resolva o captcha primeiro.');
        }

        const response = await fetch(`${API_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify({
                message: message,
                conversation_history: history,
                language: language
            })
        });

        if (response.status === 401 || response.status === 403) {
            // Token expired or invalid
            this.token = null;
            localStorage.removeItem('chat_token');
            throw new Error('Sessão expirada. Por favor, recarregue o chat.');
        }

        if (!response.ok) {
            throw new Error('Erro ao enviar mensagem');
        }

        return await response.json();
    }

    getUserId(): string | null {
        return this.userId;
    }
}

export const chatService = new ChatService();
