import React from 'react'
import { RespTable } from '../styles/table'
import LiveEdit from './LiveEdit'
import { Heading } from '../styles/common'

const Preview = ({ globalVar, title, directive, code, attrs }) => {
  return (
    <div style={{marginTop: 30}}>
      <Heading>{title}</Heading>
      <LiveEdit scope={{ [directive]: globalVar }} code={code} />
      <RespTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>PropType</th>
            <th>Possible Values</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {attrs.map((cols, idx) => {
          return <tr key={`${title}${idx}`}>
            <td data-th="Name">{cols[0]}</td>
            <td data-th="PropType">{cols[1]}</td>
            <td data-th="Values">{cols[2]}</td>
            <td data-th="Description">{cols[3]}</td>
          </tr>
        })}
        </tbody>
      </RespTable>
    </div>
  )
}

export default Preview
