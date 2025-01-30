export default function configureSocket(io) {
    io.on("connection", (socket) => {
        socket.on("sendAmount", (amount) => {
            const change = calculateChange(parseFloat(amount));
            io.emit("response", change);
        });

        socket.on("disconnect", () => {});
    });
}

function calculateChange(amount) {
    const baseAmount = amount;
    const denominations = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    const result = {};

    for (let value of denominations) {
        if (amount >= value) {
            let count = Math.floor(amount / value);
            result[value] = count;
            amount = (amount - count * value).toFixed(2);
        }
    }
    return { amount: baseAmount, result };
}
