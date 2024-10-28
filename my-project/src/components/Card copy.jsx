import { useEffect, useRef } from "react";
// import { EXPERIENCES } from "../constants";
import "./../components/styles/Card.scss"


const Card = (mainHeading, referral) => {
    console.clear();
    const cardsContainerRef = useRef(null);
    const overlayRef = useRef(null);
    const properties = referral.map((item) => {
        {item.year}
        {item.role}
        {item.company}
        {item.description}
        {item.technologies}
        // Define an array of properties for each object

    });

    useEffect(() => {

        const cardsContainer = cardsContainerRef.current;
        const overlay = overlayRef.current;
        if (!cardsContainer || !overlay) return; // Exit if refs are null

        // const cardsContainerInner = document.querySelector(".cards__inner");
        const cards = Array.from(cardsContainer.querySelectorAll(".card"));

        const applyOverlayMask = (e) => {
            const overlayEl = e.currentTarget;
            const x = e.pageX - cardsContainer.offsetLeft;
            const y = e.pageY - cardsContainer.offsetTop;

            overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
        };


        const createOverlayCta = (overlayCard, ctaEl) => {
            const overlayCta = document.createElement("div");
            overlayCta.classList.add("cta");
            overlayCta.textContent = ctaEl.textContent;
            overlayCta.setAttribute("aria-hidden", true);
            overlayCard.append(overlayCta);
        };

        const observer = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                const cardIndex = cards.indexOf(entry.target);
                const { inlineSize: width, blockSize: height } = entry.borderBoxSize[0];
                if (cardIndex >= 0 && overlay.children[cardIndex]) {
                    overlay.children[cardIndex].style.width = `${width}px`;
                    overlay.children[cardIndex].style.height = `${height}px`;
                }
            });
        });

        const initOverlayCard = (cardEl) => {
            const overlayCard = document.createElement("div");
            overlayCard.classList.add("card");
            createOverlayCta(overlayCard, cardEl.lastElementChild);
            overlay.append(overlayCard);
            observer.observe(cardEl);
        };

        cards.forEach(initOverlayCard);
        document.body.addEventListener("pointermove", applyOverlayMask);
        return () => {
            document.body.removeEventListener("pointermove", applyOverlayMask);
            observer.disconnect();
        };
    }, []);

    return (<>
        <h1 className="main__heading">{mainHeading}</h1>

        <div className="main__cards cards">
            {properties.map((mapped, index) => (
                <div key={index} className="cards__inner">
                    <div className="cards__card card">
                        <h2 className="card__heading">
                            {mapped.properties[0]}
                        </h2>
                        <h2>
                            {mapped.properties[1]}
                        </h2>
                        <p className="card__name">{mapped.properties[2]}</p>
                        <p className="card__description">{mapped.properties[3]}</p>
                        <ul role="list" className="card__bullets flow">
                            {mapped.properties[4]}
                        </ul>
                        <a href="#basic" className="card__cta cta">Get Started</a>
                    </div>
                </div>
            )
            )
            }
        </div>
    </>

    );
}

export default Card
