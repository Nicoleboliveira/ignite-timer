import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;
  margin-bottom: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;

    thead,
    tbody,
    tr,
    td,
    th {
      display: block;
    }
    thead {
      display: table;
      width: 100%;
      table-layout: fixed;
    }
    tbody {
      display: block;
      max-height: 45vh; // 40% da altura da tela
      overflow-y: auto;

      padding-right: 0.1rem; // isso "afasta" o scrollbar do conteúdo
      box-sizing: content-box; // importante pra padding não atrapalhar scroll
      scrollbar-width: thin; /* para Firefox */
      scrollbar-color: #888 transparent;

      &::-webkit-scrollbar {
        width: 8px; /* largura da barra de rolagem */
      }

      &::-webkit-scrollbar-track {
        background: transparent; /* fundo da trilha */
      }

      &::-webkit-scrollbar-thumb {
        background-color: #505059; /* cor da barra */
        border-radius: 4px; /* cantos arredondados */
        border: 2px solid transparent;
        background-clip: content-box;
      }
    }

    tr {
      display: table;
      display: flex;
      width: 100%;
    }

    th,
    td {
      flex: 1;
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
    }

    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;
interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}
export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
