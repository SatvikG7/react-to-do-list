function About({version}) {
    return (
        <div className="about">
            <h1>V {version}</h1>
            <ul className="aboutUl">
                <li>Your todos are saved locally so do not care about privacy 😁</li>
                <li>Clearing browser cache and similar activities will erase your previously entered todos (permanently 😈)</li>
                <li>Add this site to Home screen using menu for better performance</li>
                <li>ProTip 😎: You can double click/tap on todo to toggle its importance</li>
            </ul>
        </div>
    )
}

export default About
