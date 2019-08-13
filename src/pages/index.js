import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import styled from "@emotion/styled"
import dog from "../images/dog.jpg"

const BannerWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${dog}) center top no-repeat;
  color: white;
  height: 650px;
  padding-left: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 96px;
  }

  p {
    font-size: 26px;
  }
`

const TitleAndSubtitle = styled.div`
  transition: 0.5s all;

  &.form-active {
    transform: translateY(-180px);
  }
`

const InfosWrapper = styled.div`
  min-height: 520px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 768px;
  overflow: hidden;
`

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0px;
  min-width: 320px;
`
const IndexButton = styled.button`
  background: rebeccapurple;
  width: 100%;
  padding: 30px;
  transition: 0.5s all;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  white-space: nowrap;

  &.button-active {
    width: 500%;
  }

  &:first-of-type {
    border-right: 1px solid #2e0152;
  }

  &:hover {
    background-color: #2e0152;
  }
`

const Form = styled.form`
  width: 100%;
  background: #2e0152;
  position: absolute;
  bottom: 0px;
  padding-bottom: 60px;
  border-radius: 3px;
  // opacity: 0;
  min-height: 300px;

  transform: translateY(100%);
  transition: 0.5s all;

  &.form-active {
    opacity: 1;
    transform: translateY(0%);
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }
`

const IndexPage = () => {
  const [type, setType] = useState(null)
  const [formLost, setFormLost] = useState({
    type: null, // cat or dog
    breed: null, // shih-tzu, lhasa, etc? ...
    localization: null, // são paulo, sp, ...
    name: null, //animal name?
    phone: null, //+55 (11) 92132-1233
    picture: null, //animal picture
    size: null, //p, m or g
    keywords: [], // key words animal.
  })
  const [formFind, setFormFind] = useState({
    type: null, // cat or dog
    breed: null, // shih-tzu, lhasa, etc? ...
    localization: null, // são paulo, sp, ...
    name: null, //animal name?
    phone: null, //+55 (11) 92132-1233
    picture: null, //animal picture
    size: null, //p, m or g
    keywords: [], // key words animal.
  })

  const changeFormType = n => (type === n ? setType(null) : setType(n))

  const changeFormLost = e =>
    setFormLost({ ...formLost, [e.target.name]: e.target.value })

  const changeFormFind = e =>
    setFormFind({ ...formFind, [e.target.name]: e.target.value })

  const submitLost = e => {
    e.preventDevault()
  }

  const submitFind = e => {
    e.preventDevault()
  }

  return (
    <Layout>
      <SEO title="Home" />
      <BannerWrapper>
        <InfosWrapper>
          <TitleAndSubtitle className={type && "form-active"}>
            <h1>Cadê meu pet?</h1>
            <p>Ajudamos a encontrar seu pet atráves da tecnologia.</p>
          </TitleAndSubtitle>

          <Form className={type === 1 && "form-active"} onSubmit={submitFind}>
            {Object.keys(formFind).map(field => {
              return (
                <div key={field}>
                  <label>{field}</label>
                  <input
                    type="text"
                    name={field}
                    onChange={changeFormFind}
                    defaultValue={formFind[field]}
                  ></input>
                  <button type="submit">Próximo</button>
                </div>
              )
            })}
            <button type="submit">Enviar</button>
          </Form>

          <Form className={type === 2 && "form-active"} onSubmit={submitLost}>
            {Object.keys(formLost).map(field => {
              return (
                <div key={field}>
                  <label>{field}</label>
                  <input
                    type="text"
                    name={field}
                    onChange={changeFormLost}
                    defaultValue={formLost[field]}
                  ></input>
                  <button type="submit">Próximo</button>
                </div>
              )
            })}
            <button type="submit">Enviar</button>
          </Form>

          <ButtonsWrapper>
            <IndexButton
              onClick={() => changeFormType(1)}
              className={type === 1 && "button-active"}
            >
              Achei um pet
            </IndexButton>
            <IndexButton
              onClick={() => changeFormType(2)}
              className={type === 2 && "button-active"}
            >
              Perdi meu pet
            </IndexButton>
          </ButtonsWrapper>
        </InfosWrapper>
      </BannerWrapper>
    </Layout>
  )
}

export default IndexPage
