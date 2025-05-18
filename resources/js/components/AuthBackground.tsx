import { Link } from '@inertiajs/react';

export default function AuthBackground() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-indigo-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src="/auth-bg.jpg" alt="Background" style={{ objectFit: 'cover', objectPosition: 'center' }} className="opacity-5" />
            </div>

            {/* Logo and Content Container */}
            <div className="relative z-10 flex h-full flex-col p-8">
                <div className="mb-6">
                    <Link className="text-sm font-bold text-white uppercase" href="/">
                       Abrajeimmo
                    </Link>
                </div>

                <div className="flex h-full flex-col justify-center">
                    <div className="max-w-md text-white">
                        <h1 className="mb-6 text-4xl font-bold">web immobilier </h1>
                        <p className="mb-8 text-lg">
                          pour gerer vos produits de location ou a vendre ou changer.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="mr-3 rounded-lg bg-white/20 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm opacity-70">Email Support:</div>
                                    <div>admin@abrajeimmo.com</div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="mr-3 rounded-lg bg-white/20 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm opacity-70">Phone Support:</div>
                                    <div>+212 680040002</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-auto">
                    <div className="text-sm text-white/70">© {new Date().getFullYear()} ABRAJEIMMO. All rights reserved.</div>
                </div>
            </div>
        </div>
    );
}
