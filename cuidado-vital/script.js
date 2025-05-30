// Agendamento
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-agendamento");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const nome = document.getElementById("nome").value;
            const data = document.getElementById("data").value;
            const especialidade = document.getElementById("especialidade").value;

            document.getElementById("mensagem-agendamento").innerText =
                `Consulta agendada para ${nome}, especialidade ${especialidade}, no dia ${data}.`;
        });
    }

    // Prontuário
    const prontuario = document.getElementById("prontuario");
    if (prontuario) {
        const dados = {
            nome: "João da Silva",
            idade: 42,
            historico: [
                "Consulta com Clínico Geral - 15/03/2025",
                "Exame de Sangue - 17/03/2025",
                "Prescrição de Antibiótico - 18/03/2025"
            ]
        };

        prontuario.innerHTML = `
            <h2>${dados.nome} (${dados.idade} anos)</h2>
            <h3>Histórico Médico</h3>
            <ul>${dados.historico.map(item => `<li>${item}</li>`).join("")}</ul>
        `;
    }
});

// Emergência
function acionarEmergencia() {
    const resposta = document.getElementById("resposta-emergencia");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            resposta.innerHTML = `
                <p>Emergência registrada!</p>
                <p>Localização aproximada: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}</p>
                <p>Equipe de atendimento será enviada imediatamente.</p>
            `;
        });
    } else {
        resposta.innerText = "Geolocalização não suportada pelo navegador.";
    }
}