import React from "react";

class RandomPerson extends React.Component {
  constructor() {
    super();

    this.state = {
      picture: undefined,
      name: undefined,
      email: undefined,
      age: undefined,
      loading: true,
    }
  }

  async fetchPerson() {
    this.setState(
      { loading: true },
      async () => {
        const requestReturn = await fetch('https://api.randomuser.me/');
        const requestObject = await requestReturn.json();
        const resume = requestObject.results[0];
        console.log(resume.picture.large)
        this.setState({
          loading: false,
          picture: resume.picture.large,
          name: `${resume.name.first} ${resume.name.last}`,
          email: resume.email,
          age: resume.registered.age,
        })
      }
    )
  }

  componentDidMount() {
    this.fetchPerson();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const age = 50;
    if (nextState.age < age){
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { picture, name, email, age, loading } = this.state;
    const loadingElement = <span>Carregando...</span>
    const elementLoaded = <span>
      <img src={picture} alt={name} />
      <span>Nome: {name}</span>
      <span>Idade: {age}</span>
      <span>Email: {email}</span>
    </span>
    return (
      <div>
        <p>
          {
            loading === true
            ? loadingElement
            : elementLoaded
          }
        </p>
      </div>
    )
  }
}

export default RandomPerson;