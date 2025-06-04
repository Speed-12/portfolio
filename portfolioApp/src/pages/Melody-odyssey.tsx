import Project from "../components/Project";

export default function MelodyOdyssey() {
    const texteComplet = (
        <p>
            Lors d'une game jam intense de 30 heures, j'ai eu l'opportunité de développer un jeu vidéo au sein d'une équipe de 6 personnes, 
            une expérience qui m'a permis d'acquérir et de renforcer de nombreuses compétences. Nous avons dû gérer efficacement la pression du temps, 
            prioriser les tâches et collaborer étroitement pour respecter les délais serrés. J'ai également appris à utiliser le moteur de jeu Godot, 
            en m'adaptant rapidement à ses fonctionnalités et en contribuant à la création d'un prototype fonctionnel.
            J'ai eu comme rôle de gérer l'équipe et de coordonner les tâches, en m'assurant que chacun puisse contribuer efficacement au projet. 
            J'ai ainsi du gérer le git et les conflits qui pouvaient arriver.
            <br /> {/* Optionnel: pour un saut de ligne simple si vous ne voulez pas un nouveau paragraphe */}
            <br /> {/* Ou laissez juste un espace */}
            Cette expérience m'a permis de développer mes compétences en résolution de problèmes, en communication d'équipe et en gestion de projet, tout en renforçant ma capacité à travailler sous contraintes techniques et temporelles.
        </p>
    );

    return (
        <div>
            <Project 
                title={"Melody Odyssey"} 
                text={texteComplet} 
                img="/assets/melody_odyssey.png"
            />
        </div>
    )
}