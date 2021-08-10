import styled from "styled-components";

export const CreateContainer = styled.div`
    width: 70%;
    min-height: 40vh;
    margin: 0 auto;
    /* background-color: #ddd; */
`

export const CreateHeading = styled.h2`
    text-align: center;
    font-size: 20px;
    color: #f1356d;
   
`

export const CreateForm = styled.form``;



export const CreateInput = styled.input`
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;

`
export const CreateTextarea = styled.textarea`
width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`

export const CreateSelect = styled.select`
width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`
export const CreateLabel = styled.label`
    display: block;
    opacity:1;
    transform: translateY(0);
    transition: all .5s;

    ${CreateInput}:placeholder-shown + &{
        opacity: 0;
        visibility: hidden;
        transform: translateY(-50px);
    }
    ${CreateTextarea}:placeholder-shown + &{
        opacity: 0;
        visibility: hidden;
        transform: translateY(-50px);
    }
    ${CreateSelect}:placeholder-shown + &{
        opacity: 0;
        visibility: hidden;
        transform: translateY(-50px);
    }
`





export const CreateOption = styled.option``

export const CreateSummary = styled.div`
margin-top: 50px;
`

export const CreateSummaryLabel = styled.h4`
color:#f1356d ;
display: block;
`

export const CreateSubmitBtn = styled.button`
background: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`