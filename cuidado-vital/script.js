document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("agendamentoForm");
  const mensagem = document.getElementById("mensagemConfirmacao");
  const dataInput = document.getElementById("data");
  const hoje = new Date();
  const yyyy = hoje.getFullYear();
  const mm = String(hoje.getMonth() + 1).padStart(2, '0');
  const dd = String(hoje.getDate()).padStart(2, '0');
  dataInput.min = `${yyyy}-${mm}-${dd}`;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const especialidade = document.getElementById("especialidade").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;

    if (!nome || !especialidade || !data || !horario) {
      mensagem.className = "mensagem-erro";
      mensagem.innerHTML = `<strong>Preencha todos os campos antes de agendar.</strong>`;
      mensagem.style.display = "block";
      return;
    }

    const dataHoraSelecionada = new Date(`${data}T${horario}`);
    const agora = new Date();

    if (dataHoraSelecionada < agora) {
      mensagem.className = "mensagem-erro";
      mensagem.innerHTML = `<strong>Não é possível agendar para o passado.</strong><br>Escolha uma data e horário válidos.`;
      mensagem.style.display = "block";
      return;
    }

    const dataFormatada = dataHoraSelecionada.toLocaleDateString('pt-BR');
    const especialidadeFormatada = especialidade.charAt(0).toUpperCase() + especialidade.slice(1);
    
    mensagem.className = "mensagem-sucesso";
    mensagem.innerHTML = `
      <strong>Consulta agendada com sucesso!</strong><br>
      <span><strong>Nome:</strong> ${nome}</span><br>
      <span><strong>Especialidade:</strong> ${especialidadeFormatada}</span><br>
      <span><strong>Data:</strong> ${dataFormatada}</span><br>
      <span><strong>Horário:</strong> ${horario}</span>
    `;
    mensagem.style.display = "block";
    form.reset();
  });
});