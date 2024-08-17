function showMessage() {
    const messageElement = document.getElementById('message');
    const sisterName = "DIDI"; // Customize this
    const brotherName = "JAI"; // Customize this

    const message = `
        Dear ${sisterName},

        On this joyous occasion of Raksha Bandhan, I want to express how much you mean to me.
        Your presence is a blessing, and our bond is something I treasure deeply.

        May this Raksha Bandhan bring you endless happiness, success, and good health.
        Here’s to the countless memories we've made and the many more to come!

        Happy Raksha Bandhan!

        With love,
        ${brotherName}
    `;

    messageElement.textContent = message;
    messageElement.style.opacity = 1;
}
