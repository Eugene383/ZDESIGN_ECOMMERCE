"use client";

import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export default function Footer(){
    return(
        <footer className="bg-slate-900 text-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4">ZD Design</h3>
                        <p className="text-sm text-slate-400 leading-relaxed font-light">Sua parceira em design e branding em Angola.</p>
                        <div className="flex gap-3 mt-4">
                            <Link href="#" className="text-slate-400 hover:text-teal-400 font-semibold"><FacebookIcon size={20}/></Link>
                            <Link href="#" className="text-slate-400 hover:text-teal-400 font-semibold"><InstagramIcon size={20}/></Link>
                            <Link href="#" className="text-slate-400 hover:text-teal-400 font-semibold"> <LinkedinIcon size={20}/> </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold mb-4">Explorar</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-teal-400 font-light">Produtos</Link></li>
                            <li><Link href="#" className="hover:text-teal-400 font-light">Services</Link></li>
                            <li><Link href="#" className="hover:text-teal-400 font-light">Conctato</Link></li>
                            <li><Link href="#" className="hover:text-teal-400 font-light">Sobre Nós</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold mb-4">Suporte</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-teal-400 font-light">Produtos</Link></li>
                            <li><Link href="#" className="hover:text-teal-400 font-light">Help</Link></li>
                            <li><Link href="#" className="hover:text-teal-400 font-light">Termos de Serviço</Link></li>
                            <li><Link href="#" className="hover:text-teal-400 font-light">Privacidade</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold mb-4">Contacto</h4>
                        <ul className="space-y-2 text-sm text-slate-400 font-light">
                            <li>Email: info@zdesign.com</li>
                            <li>WhatsApp: +244 9XX XXX XXX</li>
                        </ul>
                    </div>
                </nav>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
                    <p className="font-light">&copy; 2026 ZD Design. Todos direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}