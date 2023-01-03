import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface JoinUsInterface {}

const JoinUs: React.FC<JoinUsInterface> = () => {
  return (
    <div className="join-us" id="join">
      <div className="container">
        <h2>¿Cómo me uno?</h2>
        <p>En Coding Latam tienes 2 maneras de ser parte de la comunidad:</p>
        <div className="item">
          <div className="item__image">
            <Image src="/images/student.svg" alt="" width={80} height={80} />
          </div>
          <div className="item__description">
            <h3>Estudiante</h3>
            <p>
              Quieres aprender sobre tecnología y mejorar tus habilidades. Únete
              a Discord!
            </p>
            <a
              className="btn yellow"
              target="_blank"
              href="https://discord.com/invite/7bpGcDT"
              rel="noopener noreferrer"
            >
              Quiero ser estudiante
            </a>
          </div>
        </div>
        <div className="item">
          <div className="item__image">
            <Image src="/images/teacher.svg" alt="" width={80} height={80} />
          </div>
          <div className="item__description">
            <h3>Mentor</h3>
            <p>
              Quieres compartir tu experiencia con nuevos entusiastas de la
              tecnología
            </p>

            <Link href={"/mentor"}>
              <a className="btn yellow">Quiero ser mentor</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
