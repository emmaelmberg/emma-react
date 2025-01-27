// Komponent för mitt fritidsintresse som listar vilka blommor jag planerat att odla 2025
function Flowers() {
    const flowers = [
        { id: 1, name: "Riddarsporre", height: 90, started: true },
        { id: 2, name: "Backtimjan", height: 15, started: false },
        { id: 3, name: "Kattmynta", height: 50, started: true },
        { id: 4, name: "Dahlia", height: 100, started: false }
    ];

    return (
        <>
            <table style={{ minWidth: "500px" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left" }}>Namn</th>
                        <th style={{ textAlign: "left" }}>Höjd i cm</th>
                        <th style={{ textAlign: "left" }}>Börjat odla</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Map används för att loopa igenom arrayen 'flowers' ovan och skrivs ut i en tabell
                        flowers.map((flower) => (
                            <tr key={flower.id}>
                                <td>
                                    {flower.name}
                                </td>
                                <td>
                                    {flower.height}
                                </td>
                                <td>
                                    {flower.started ? 'Ja' : 'Nej'}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Flowers
