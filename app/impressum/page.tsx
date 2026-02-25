// Impressum - Swiss Legal Requirement
export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>
        
        <div className="space-y-6 text-slate-300">
          <section className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Anbieter</h2>
            <p className="mb-2"><strong>Guthabenkarten.ch</strong></p>
            <p className="mb-2">Philipp Schmutz</p>
            <p>5303 Würenlos, Schweiz</p>
          </section>

          <section className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Kontakt</h2>
            <p className="mb-2"><strong>E-Mail:</strong> info@guthabenkarten.ch</p>
            <p><strong>Verantwortlich:</strong> Philipp Schmutz</p>
          </section>

          <section className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Geschäftstätigkeit</h2>
            <p>Vertrieb von digitalen Guthabenkarten und Geschenkkarten für Gaming-, Streaming- und App-Plattformen.</p>
          </section>

          <section className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Urheberrecht</h2>
            <p>Alle Inhalte dieser Website, einschliesslich Texte, Bilder und Grafiken, sind urheberrechtlich geschützt. Eine Vervielfältigung oder Weitergabe bedarf der schriftlichen Zustimmung des Anbieters.</p>
          </section>

          <section className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Haftungsausschluss</h2>
            <p className="mb-3">Der Anbieter übernimmt keine Haftung für die Aktualität, Richtigkeit und Vollständigkeit der auf dieser Website bereitgestellten Informationen.</p>
            <p>Haftungsansprüche gegen den Anbieter, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen.</p>
          </section>

          <section className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Markenzeichen</h2>
            <p className="mb-2">Alle auf dieser Website genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer.</p>
            <p className="text-sm text-slate-400 mt-3">
              Steam, PlayStation, Xbox, Nintendo, Netflix, Spotify, Apple, Google Play, Roblox und Amazon sind eingetragene Marken ihrer jeweiligen Eigentümer. Guthabenkarten.ch ist nicht mit diesen Unternehmen verbunden.
            </p>
          </section>

          <section className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Streitbeilegung</h2>
            <p className="mb-3">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr/</a></p>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
