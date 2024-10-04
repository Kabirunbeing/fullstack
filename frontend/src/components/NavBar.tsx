import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const menuItems = ['Home', 'Tasks', 'Snippets', 'Time Tracker'];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl text-gray-800">Kabdev</div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                            className="text-gray-600 transition-transform duration-200 transform hover:scale-105 relative group"
                        >
                            {item}
                            <span className="block h-0.5 w-full bg-blue-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-gray-600 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md p-4">
                    <div className="flex flex-col space-y-2">
                        {menuItems.map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase().replace(' ', '-')}`}
                                className="text-gray-600 font-bold transition-transform duration-200 transform hover:scale-105"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
