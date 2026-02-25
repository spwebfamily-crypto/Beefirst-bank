import React, { useState } from 'react';
import { useLanguage } from '../lib/languageContext';
import { DottedSurface } from './ui/dotted-surface';
import { Loader2 } from 'lucide-react';
import { getLeadIntegrationConfig, submitLeadCapture } from '../lib/leadCapture';

const ContactPage: React.FC = () => {
    const { t, language } = useLanguage();
    const { title, subtitle, whatsapp, form } = t.contact;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const integrationConfig = getLeadIntegrationConfig();
    const whatsappHref = integrationConfig.whatsappNumber
        ? `https://wa.me/${integrationConfig.whatsappNumber}`
        : 'https://wa.me/message/ZQQJDAI43HJPI1';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setStatusMessage('');

        try {
            const formElement = e.currentTarget;
            const formEntries = Object.fromEntries(new FormData(formElement).entries());
            const result = await submitLeadCapture(
                {
                    ...formEntries,
                    ...formData,
                    goal: formData.message,
                    profile: '',
                    volume: '',
                },
                {
                    locale: language,
                }
            );

            if (!result.ok) {
                setStatus('error');
                setStatusMessage(result.message);
                return;
            }

            setStatus('success');
            setStatusMessage(result.message);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: ''
            });
            formElement.reset();

            // Reset status after 5 seconds to allow sending another message
            setTimeout(() => {
                setStatus('idle');
                setStatusMessage('');
            }, 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setStatusMessage(
                error instanceof Error
                    ? error.message
                    : (language === 'pt'
                        ? 'Não foi possível enviar o pedido agora.'
                        : language === 'es'
                            ? 'No fue posible enviar la solicitud ahora.'
                            : 'We could not send your request right now.')
            );
        }
    };

    const inputClass = "w-full h-12 rounded-lg border-2 border-brand-anthracite bg-white shadow-[4px_4px_0px_0px_rgba(33,37,41,1)] px-4 font-bold text-brand-anthracite focus:border-brand-blue outline-none transition-all placeholder:text-gray-400 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none";
    const labelClass = "text-brand-anthracite font-bold text-sm mb-2 block font-display uppercase tracking-wider";

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="relative pt-40 pb-16 bg-brand-anthracite text-white overflow-hidden">
                <DottedSurface className="opacity-30" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-tight leading-tight text-brand-yellow">
                        {title}
                    </h1>
                    <p className="text-xl text-white font-sans font-light max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Left Side: Talk to AI (WhatsApp) */}
                        <div className="bg-brand-anthracite rounded-[2rem] p-10 md:p-14 text-white flex flex-col justify-center relative overflow-hidden shadow-[8px_8px_0px_0px_#FACC00] border-2 border-brand-anthracite">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-[80px] -ml-16 -mb-16 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-brand-yellow rounded-2xl flex items-center justify-center mb-8 border-2 border-brand-anthracite shadow-[4px_4px_0px_0px_#fff]">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-brand-anthracite">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold mb-4 font-display text-brand-yellow">{whatsapp.title}</h2>
                                <p className="text-gray-300 mb-10 text-lg leading-relaxed">{whatsapp.desc}</p>

                                <button
                                    onClick={() => window.open(whatsappHref, '_blank', 'noopener,noreferrer')}
                                    className="w-full py-4 rounded-xl border-2 border-brand-anthracite bg-[#25D366] shadow-[4px_4px_0px_0px_#fff] font-bold text-white text-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all hover:bg-[#20bd5a] flex items-center justify-center gap-3 font-display"
                                >
                                    {whatsapp.button}
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Neobrutalist Form (Yellow Brand) */}
                        <div className="flex flex-col">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-brand-anthracite font-display mb-2">{form.title}</h2>
                                <p className="text-brand-gray font-sans">{form.desc}</p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 bg-brand-yellow rounded-xl border-2 border-brand-anthracite shadow-[8px_8px_0px_0px_#212529]">
                                <label className="sr-only" aria-hidden="true">
                                    Website
                                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                                </label>

                                <div>
                                    <label className={labelClass}>{form.fields.name}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClass}>{form.fields.email}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={inputClass}
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>{form.fields.phone}</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={inputClass}
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClass}>{form.fields.company}</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="Acme Inc."
                                        required
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>{form.fields.message}</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`${inputClass} h-32 py-3`}
                                        placeholder="..."
                                        required
                                    />
                                </div>

                                {status === 'success' && (
                                    <div className="p-4 bg-green-500 text-white font-bold rounded-lg border-2 border-brand-anthracite flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {statusMessage || "Message sent! We'll reach out soon."}
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="p-4 bg-red-500 text-white font-bold rounded-lg border-2 border-brand-anthracite flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {statusMessage || "Something went wrong. Please try again."}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full mt-4 h-14 rounded-xl border-2 border-brand-anthracite bg-brand-anthracite text-brand-yellow shadow-[4px_4px_0px_0px_#fff] font-bold text-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all hover:bg-black font-display uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            {language === 'pt' ? 'ENVIANDO...' : language === 'es' ? 'ENVIANDO...' : 'SENDING...'}
                                        </>
                                    ) : (
                                        form.submit
                                    )}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
