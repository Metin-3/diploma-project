import React, { useEffect, useState } from 'react'

const WineryGoToTop = () => {
    //! GO TO TOP
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);


    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div className="top-to-btm" style={{ position: 'relative' }}>
                {showTopBtn && (
                    <i className="fa-solid fa-angles-up" onClick={goToTop}
                        style={{
                            position: 'fixed',
                            color: "#fff",
                            backgroundColor: "#cea567",
                            width: "20px",
                            height: "20px",
                            padding: "15px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            bottom: '20px',
                            right: '20px',
                            cursor: 'pointer',
                            zIndex: '2'
                        }}
                    ></i>

                )}
            </div>
        </>
    )
}

export default WineryGoToTop