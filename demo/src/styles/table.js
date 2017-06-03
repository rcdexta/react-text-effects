import styled from 'styled-components'

const breakpointAlpha = '500px'

export const RespTable = styled.table`
  
  margin: 1em 0;
  width: 100%;
  font-size: 0.8em;
  min-width: 300px; 
  border-radius: .4em;
  overflow: hidden;
  border-spacing: 0px;
  
  thead {
    border-bottom: 2px solid rgba(20, 20, 20, 0.1);
  }

  th {
    display: none; 
  }

  td {
    display: block;

    &:first-child {
        padding-top: .5em;
        font-weight: 600;
    }
    
    &:last-child {
        padding-bottom: .5em;
    }
  
    &:before {
        content: attr(data-th)": "; 
        font-weight: bold;
  
        width: 6.5em; 
        display: inline-block;
  
      @media (min-width: ${breakpointAlpha}) {
          display: none;
        }
    }
  }
  
  th {
    text-transform: uppercase;
    font-size: 85%;
  }
  
  th, td {
    text-align: left;
    margin: .5em 1em;
  
    @media (min-width: ${breakpointAlpha}) { 
      padding: 1em !important; 
    }

    @media (min-width: ${breakpointAlpha}) {
      display: table-cell;
      padding: .25em .5em;

      &:first-child {
          padding-left: 0;
        }
  
      &:last-child {
          padding-right: 0;
        }
      }
  }
`
