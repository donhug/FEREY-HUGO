import './projetGit.css'

function ProjetGit({projet}) {
    return (
        <div className="projet-git">
            <a href={projet.github} target="_blank" rel="noreferrer" className="github-hover">
                <i className="fa-brands fa-github"></i>
                github
            </a>

            {projet.live && (
                <a href={projet.live} target="_blank" rel="noreferrer" className="github-hover">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    live
                </a>
            )}
        </div>
    )
}
export default ProjetGit