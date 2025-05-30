$(document).ready(function () {
    const consultas = JSON.parse(localStorage.getItem("consultas")) || [];

    if (consultas.length === 0) {
        $("#lista-consultas").html("<p>Nenhuma consulta agendada.</p>");
        return;
    }

    consultas.forEach((consulta) => {
    const card = `
        <div class="card-prontuario">
        <h3>Consulta - ${consulta.data} - ${consulta.especialidade}</h3>
        <p><strong>Paciente:</strong> ${consulta.nome}</p>
        <p><strong>Especialidade:</strong> ${consulta.especialidade}</p>
        <p><strong>Data:</strong> ${consulta.data}</p>
        <p><strong>Horário:</strong> ${consulta.horario}</p>
        <button class="btn" onclick="gerarReceita('${consulta.especialidade}', '${consulta.nome}')">Ver receita</button>
        </div>
    `;
    $("#lista-consultas").append(card);
    });
});

function gerarReceita(especialidade, nome) {
  const receitas = {
    "Clínico Geral": "Paracetamol 500mg, 1 comprimido a cada 6h por 5 dias.",
    "Pediatria": "Amoxicilina 250mg, 1 colher 3x ao dia por 7 dias.",
    "Ginecologia": "Ibuprofeno 400mg, 1 comprimido a cada 8h por 3 dias.",
    "Psicologia": "Consulta psicológica realizada. Sem prescrição farmacológica."
  };

  const texto = receitas[especialidade] || "Nenhuma prescrição disponível.";
  alert(`Receita para ${nome}:\n${texto}`);
}