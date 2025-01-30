export default function configureSocket(io) {
    io.on("connection", (socket) => {
        console.log("Un utilisateur est connecté.");

        socket.on("sendAmount", (amount) => {
            console.log(`Somme reçue : ${amount}€`);
            const change = calculateChange(parseFloat(amount));
            socket.emit("response", change);
        });

        socket.on("disconnect", () => {
            console.log("Utilisateur déconnecté.");
        });
    });
}

// Fonction pour calculer la répartition en billets et pièces
function calculateChange(amount) {
    const denominations = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    const result = {};

    for (let value of denominations) {
        if (amount >= value) {
            let count = Math.floor(amount / value);
            result[value] = count;
            amount = (amount - count * value).toFixed(2);
        }
    }

    return result;
}
