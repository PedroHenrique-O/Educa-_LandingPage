import { Container } from "./styles";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type InfoSectionProps = {
  id: string;

  topLine: string;
  headline: string;
  description: string;

  ImgFirst: boolean;
  img: string;
  alt: string;
};

gsap.registerPlugin(ScrollTrigger);

export function InfoSection(props: InfoSectionProps) {
  const textRef = useRef<HTMLDivElement[]>([]);

  const imgRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !textRef.current.includes(el)) textRef.current.push(el);
  };

  const addToRefs2 = (el: HTMLDivElement) => {
    if (el && !imgRef.current.includes(el)) imgRef.current.push(el);
  };

  useEffect(() => {
    textRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: -100,
          opacity: 0,
        },
        {
          ease: "elastic.out(1, 0.5)",
          duration: 2,
          opacity: 1,
          autoAlpha: 1,
          delay: 0.3,
          y: 0,
          scrollTrigger: {
            trigger: el,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    imgRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: +100,
          opacity: 0,
        },
        {
          ease: "elastic.out(1, 0.5)",
          duration: 2,
          opacity: 1,
          autoAlpha: 1,
          delay: 0.3,
          y: 0,
          scrollTrigger: {
            trigger: el,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Container ImgFirst={props.ImgFirst} id={props.id}>
        <div className="infoWrapper">
          <div className="infoRow">
            <div className="column1">
              <div className="TextWrapper">
                <div ref={addToRefs} className="topLine">
                  {props.topLine}

                  <h1 ref={addToRefs}>{props.headline} </h1>
                  <p ref={addToRefs}>{props.description}</p>
                  <div className="btnWrapp"></div>
                </div>
              </div>
            </div>
            <div ref={addToRefs2} className="column2">
              <div className="ImgWrapper">
                <img src={props.img} alt={props.alt} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
