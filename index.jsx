import React, { useState } from "react";

function VotingAgeChecker() {
    const [name, setName] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const currentYear = new Date().getFullYear();
    const age = currentYear - Number(birthYear);
     
     function handleSubmit(event) {
        event.preventDefault();
         
        const year = Number(birthYear);
         
        if (!name.trim()) {
            setError("Please enter your name.");
            setSubmitted(false);
            return;
        }

        if (!Number.isInteger(year) || year < 1900 || year > currentYear) {
            setError("Please enter a valid birth year.");
            setSubmitted(false);
            return;
        }
         
        setError("");
        setSubmitted(true);
     }

     function resetForm() {
        setName("");
        setBirthYear("");
        setSubmitted(false);
        setError("");
     }
     return (
        <main className="page-shell">
            <header className="topbar">
                <a className="wordmark" href="#home" aria-label="Civic Check home">
                    <span className="wordmark-mark" aria-hidden="true">C</span>
                    CIVIC CHECK
                </a>
                <span className="topbar-note">A quick age check</span>
            </header>

            <section className="checker-layout" id="home" aria-labelledby="page-title">
                <div className="intro-panel">
                    <p className="eyebrow"><span className="status-dot" /> KNOW BEFORE YOU GO</p>
                    <h1 id="page-title">Your voice<br />has an age.</h1>
                    <p className="intro-copy">A simple check to see whether you meet the minimum voting age of 18.</p>
                    <div className="age-marker" aria-hidden="true">
                        <span className="age-number">18</span>
                        <span className="age-caption">YEARS OLD<br />TO VOTE</span>
                        <span className="age-line" />
                    </div>
                    <p className="fine-print">Eligibility rules can vary by location. Check your local election authority for details.</p>
                </div>

                <div className="form-panel">
                    <div className="panel-heading">
                        <span className="step-label">PERSONAL CHECK</span>
                        <span className="step-count">01 <span>/ 01</span></span>
                    </div>
                    <h2>Let's find out.</h2>
                    <p className="form-copy">Enter your name and birth year to get started.</p>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="field-group">
                            <label htmlFor="name">Your name</label>
                            <input
                                id="name"
                                type="text"
                                autoComplete="name"
                                placeholder="e.g. Jordan Lee"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                aria-invalid={Boolean(error && !name.trim())}
                                aria-describedby={error ? "form-error" : undefined}
                            />
                        </div>
                        <div className="field-group">
                            <label htmlFor="birth-year">Year of birth</label>
                            <input
                                id="birth-year"
                                type="number"
                                inputMode="numeric"
                                min="1900"
                                max={currentYear}
                                placeholder="e.g. 2005"
                                value={birthYear}
                                onChange={(event) => setBirthYear(event.target.value)}
                                aria-invalid={Boolean(error && birthYear && (!Number.isInteger(Number(birthYear)) || Number(birthYear) < 1900 || Number(birthYear) > currentYear))}
                                aria-describedby={error ? "form-error" : undefined}
                            />
                        </div>

                        {error && <p className="error-message" id="form-error" role="alert">{error}</p>}
                        <button className="submit-button" type="submit">
                            Check eligibility <span aria-hidden="true">&#8594;</span>
                        </button>
                    </form>

                    {submitted && (
                        <section className={`result ${age >= 18 ? "result-eligible" : "result-ineligible"}`} aria-live="polite">
                            <span className="result-kicker">YOUR RESULT</span>
                            <h3>Hello, {name.trim()}.</h3>
                            <p>You are <strong>{age}</strong> {age === 1 ? "year" : "years"} old.</p>
                            <p className="result-status">
                                {age >= 18
                                    ? "You meet the minimum voting age of 18."
                                    : `You will meet the minimum age in ${18 - age} ${18 - age === 1 ? "year" : "years"}.`}
                            </p>
                            <button className="reset-button" type="button" onClick={resetForm}>Check another person</button>
                        </section>
                    )}
                    <p className="privacy-note"><span aria-hidden="true">&#10003;</span> Your information stays in this browser.</p>
                </div>
            </section>

            <footer className="page-footer">
                <span>CIVIC CHECK <span className="footer-separator">/</span> AGE ELIGIBILITY</span>
                <span>For information only</span>
            </footer>
        </main>
        );
}
export default VotingAgeChecker;