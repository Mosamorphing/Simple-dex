import styled from "styled-components";

export const InputStyles = styled.div`
  background: rgb(27, 27, 27);
  padding: 1rem;
  border-radius: 1rem;
  span, .val {
    color: rgb(155, 155, 155);
    font-size: 14px;
  }
  input {
    filter: none;
    opacity: 1;
    transition: opacity 250ms ease-in-out;
    text-align: left;
    font-size: 36px;
    max-height: 44px;
    width: 100%;
    background: transparent;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #000 inset !important;
    -webkit-text-fill-color: #fff !important;
  }
  .inp {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .val {
    min-width: 50px;
    height: 1rem;
  }
`;

export const SwapStyles = styled.div`
  //   border: 2px solid #fff;
  width: 100%;
  .tg {
    display: flex;
    position: relative;
    gap: 0.25rem;
    flex-direction: column;
  }

  .swap-token {
    position: absolute;
    top: 42.5%;
    left: 46.5%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(27, 27, 27);
    border: 4px solid #000;
    border-radius: 0.75rem;
    cursor: pointer;
  }
  .btn {
    margin-top: 0.25rem;
  }
  
    /* Adjusted Chart Styles */
    .chart-container {
    font-size: 14px;
    margin-top: 2rem; 
    background: rgb(27, 27, 27);
    padding: 1rem;
    border-radius: 1rem;
    /* display: flex; */
    justify-content: center;
    align-items: center;
  }

`;
export const DynamicButton = styled.button`
  border-radius: 1rem;
  width: 100%;
  border: 1px solid transparent;
  background-color: rgba(255, 255, 255, 0.07);
  height: 3.5rem;
  font-size: 20px;
  color: rgb(155, 155, 155);
`;
