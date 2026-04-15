import React from 'react';

const Customization: React.FC = () => {
    return (
        <>
            <section
                id="customization"
                className="relative px-6 py-8 overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)`,
                }}
            >
                <div className='max-w-[1300px] mx-auto'>
                    <h2
                        className="text-lg md:text-2xl lg:text-4xl font-bold flex flex-row justify-start items-center mb-2"
                        style={{ color: "#FFFFFF" }}
                    >
                        Customization
                    </h2>

                    <p
                        className="text-sm md:text-md lg:text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
                        style={{ color: "#FFFFFF", opacity: 0.9 }}
                    >
                        Need something customized? Just get in touch with our support team! We can tweak components,
                        add new frameworks, or adjust features to match your specific needs.
                    </p>

                    <a
                        className="inline-flex items-center justify-center cursor-pointer px-10 py-3.5 border-2 font-bold rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-white hover:text-[#9333ea] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
                        style={{
                            borderColor: "#FFFFFF",
                            color: "#FFFFFF",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "var(--accent-primary)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#FFFFFF";
                        }}
                    >
                        Customize
                    </a>
                </div>
            </section >
        </>
    )
};

export default Customization;
