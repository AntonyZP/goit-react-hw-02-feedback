import styled from '@emotion/styled';

export const BtnList = styled.ul`
margin-top: 0px;
list-style: none;
text-align: center;
`


export const FeedbackBtnItem = styled.li`
text-align: center;
margin-bottom: 10px;
`

export const FeedbackBtn = styled.button`
width: 150px;
font-size: 24px;
padding: 20px, 100px;
color: #664B23;
background-color: #4BDFE1;
border: transparent;
box-shadow: 2px 3px 5px #3d3d3d;
border-radius: 3px;
cursor: pointer;
transition: all 200ms ease;
&:hover,
&:focus {
  background: #2EB6DF;
  box-shadow: 2px 4px 6px #136B85;
}

`