import React, {Component} from 'react';
import contacts from './contacts.json';
import Contacts from './Contacts.jsx';
import SearchBar from './SearchBar.jsx';
import RandomButton from './RandomButton.jsx'
import SortButton from './sortButton.jsx'
import './App.css';

class App extends Component {
  state = {
    contacts: contacts,
    fiveContacts: [...contacts].splice(0,5)
  }

  search = (event) => {
    let searchString = event.target.value.toLowerCase();
    let searchedContacts = this.state.contacts;
    let searchResult = searchedContacts.filter((contacts) =>
      contacts.name.toLowerCase().indexOf(searchString) > -1);
    this.setState({fiveContacts: searchResult})
  }

  sort = () => {
    let arrayToSort = [...this.state.fiveContacts];
    arrayToSort.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1);
    this.setState({fiveContacts: arrayToSort})
  }

  remove = (index) => {
    let contactCopy = [...this.state.fiveContacts];
    let deleteContact = index;
    let result = contactCopy.splice(deleteContact, 1);
    this.setState({fiveContacts: contactCopy});
  }

  randomAdd = () => {
    let contactsList = this.state.contacts;
    let fiveContactsCopy = [...this.state.fiveContacts];
    let randomContact = contactsList[Math.floor(Math.random()*contactsList.length)];
    let updatedArray = fiveContactsCopy.concat(randomContact);
    this.setState({fiveContacts: updatedArray})
  }

  render() {
    let contacts = this.state.fiveContacts.map((contacts, index) => {
      return (
        <div>
          <Contacts 
          picture= {contacts.pictureUrl}
          name= {contacts.name}
          popularity= {contacts.popularity}
          index= {index}
          removeContact={this.remove}
          />
        </div>
      )
    })
  return (
    <div>
      <SearchBar searchContact={this.search}/>
      <br />
      <RandomButton
      random={this.randomAdd}/>
      <br />
      <SortButton sort={this.sort}/>
      <br />
      {contacts}
    </div>
    )
  }
}

export default App;