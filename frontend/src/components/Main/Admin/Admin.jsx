import React, { Component } from 'react';
import './Admin.css';

function DataList(props) {
  console.log(props.data);
  if (props.display == true) {
    return (
      <div>
        <h1> props.data</h1>
      </div>
    )
  }
  return <span></span>;
}

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { titleAdd: '', titleDel: '', display: 'false', data: [{"id":"tt1201607","movie":"Harry Potter and the Deathly Hallows: Part 2","yearOfRelease":"15 Jul 2011","duration":"130 min","actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","language":"English","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg","boxOffice":129,"rottenTomatoesScore":"96%"},{"id":"tt1825683","movie":"Black Panther","yearOfRelease":"16 Feb 2018","duration":"134 min","actors":"Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira","language":"English, Swahili, Nama, Xhosa, Korean","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg","boxOffice":346,"rottenTomatoesScore":"96%"},{"id":"tt4154796","movie":"Avengers: Endgame","yearOfRelease":"26 Apr 2019","duration":"181 min","actors":"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth","language":"English, Japanese, Xhosa, German","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg","boxOffice":262,"rottenTomatoesScore":"94%"},{"id":"tt6857112","movie":"Us","yearOfRelease":"22 Mar 2019","duration":"116 min","actors":"Lupita Nyong'o, Winston Duke, Elisabeth Moss, Tim Heidecker","language":"English","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg","boxOffice":323,"rottenTomatoesScore":"93%"},{"id":"tt1979376","movie":"Toy Story 4","yearOfRelease":"21 Jun 2019","duration":"100 min","actors":"Tom Hanks, Tim Allen, Annie Potts, Tony Hale","language":"English","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg","boxOffice":139,"rottenTomatoesScore":"97%"},{"id":"tt4925292","movie":"Lady Bird","yearOfRelease":"01 Dec 2017","duration":"94 min","actors":"Saoirse Ronan, Laurie Metcalf, Tracy Letts, Lucas Hedges","language":"English, Spanish","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","boxOffice":274,"rottenTomatoesScore":"99%"},{"id":"tt0228746","movie":"Pretty Women","yearOfRelease":"10 Aug 1944","duration":"10 min","actors":"Red River Dave, Ann Parker, Red River Boys","language":"English","type":"movie","poster":"N/A","boxOffice":89,"rottenTomatoesScore":"N/A"},{"id":"tt0499549","movie":"Avatar","yearOfRelease":"18 Dec 2009","duration":"162 min","actors":"Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang","language":"English, Spanish","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg","boxOffice":229,"rottenTomatoesScore":"82%"},{"id":"tt0034583","movie":"Casablanca","yearOfRelease":"23 Jan 1943","duration":"102 min","actors":"Humphrey Bogart, Ingrid Bergman, Paul Henreid, Claude Rains","language":"English, French, German, Italian","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg","boxOffice":382,"rottenTomatoesScore":"99%"},{"id":"tt0110912","movie":"Pulp Fiction","yearOfRelease":"14 Oct 1994","duration":"154 min","actors":"Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta","language":"English, Spanish, French","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","boxOffice":423,"rottenTomatoesScore":"92%"},{"id":"tt0047478","movie":"Seven Samurai","yearOfRelease":"19 Nov 1956","duration":"207 min","actors":"Toshirô Mifune, Takashi Shimura, Keiko Tsushima, Yukiko Shimazaki","language":"Japanese","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","boxOffice":365,"rottenTomatoesScore":"100%"},{"id":"tt0105236","movie":"Reservoir Dogs","yearOfRelease":"02 Sep 1992","duration":"99 min","actors":"Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn","language":"English","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","boxOffice":373,"rottenTomatoesScore":"92%"},{"id":"tt0266697","movie":"Kill Bill: Vol. 1","yearOfRelease":"10 Oct 2003","duration":"111 min","actors":"Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah","language":"English, Japanese, French","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","boxOffice":369,"rottenTomatoesScore":"85%"},{"id":"tt0816692","movie":"Interstellar","yearOfRelease":"07 Nov 2014","duration":"169 min","actors":"Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow","language":"English","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","boxOffice":45,"rottenTomatoesScore":"72%"},{"id":"tt1853728","movie":"Django Unchained","yearOfRelease":"25 Dec 2012","duration":"165 min","actors":"Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington","language":"English, German, French, Italian","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg","boxOffice":281,"rottenTomatoesScore":"87%"},{"id":"tt1392190","movie":"Mad Max: Fury Road","yearOfRelease":"15 May 2015","duration":"120 min","actors":"Tom Hardy, Charlize Theron, Nicholas Hoult, Hugh Keays-Byrne","language":"English, Russian","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","boxOffice":307,"rottenTomatoesScore":"97%"},{"id":"tt1375666","movie":"Inception","yearOfRelease":"16 Jul 2010","duration":"148 min","actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy","language":"English, Japanese, French","type":"movie","poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","boxOffice":209,"rottenTomatoesScore":"87%"},{"id":"tt1520211","movie":"The Walking Dead","yearOfRelease":"31 Oct 2010","duration":"44 min","actors":"Norman Reedus, Melissa McBride, Danai Gurira, Lauren Cohan","language":"English","type":"series","poster":"https://m.media-amazon.com/images/M/MV5BYTUwOTM3ZGUtMDZiNy00M2I3LWI1ZWEtYzhhNGMyZjI3MjBmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"N/A"},{"id":"tt0903747","movie":"Breaking Bad","yearOfRelease":"20 Jan 2008","duration":"49 min","actors":"Bryan Cranston, Anna Gunn, Aaron Paul, Betsy Brandt","language":"English, Spanish","type":"series","poster":"https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"96%"},{"id":"tt1196946","movie":"The Mentalist","yearOfRelease":"23 Sep 2008","duration":"43 min","actors":"Simon Baker, Robin Tunney, Tim Kang, Owain Yeoman","language":"English","type":"series","poster":"https://m.media-amazon.com/images/M/MV5BMTQ5OTgzOTczM15BMl5BanBnXkFtZTcwMDM2OTY4MQ@@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"N/A"},{"id":"tt0934814","movie":"Chuck","yearOfRelease":"24 Sep 2007","duration":"43 min","actors":"Zachary Levi, Yvonne Strahovski, Joshua Gomez, Vik Sahay","language":"English","type":"series","poster":"https://m.media-amazon.com/images/M/MV5BMTM0ODIwNjI3NF5BMl5BanBnXkFtZTcwODU2ODUzMw@@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"N/A"}]};
  }

  handleChangeAdd = (e) => {
    this.setState({ titleAdd: e.target.value });
  }

  handleChangeDel = (e) => {
    this.setState({ titleDel: e.target.value });
  }

  sendData = () => {
    if (this.state.titleAdd && this.state.titleAdd !== "") {
      alert(this.state.titleAdd);
      // setstate(data: Axios request)
      this.setState({ titleAdd: "" });
    }
  }

  delData = () => {
    if (this.state.titleDel && this.state.titleDel !== "") {
      alert(this.state.titleDel);
      // setstate(data: Axios request)
      this.setState({ titleDel: "" });
    }
  }

  close = () => {
    this.setState({ display: false });
  }
  display = () => {
    // setstate(data: Axios request)
    this.setState({ display: true });
  }

  render() {
    return (
      <div className="container-admin">
        <div className="admin-title">
          <h1> Admin Panel</h1>
        </div>
        <div className="main-admin">
          <div className="main-content">
            <li> Ajouter un film avec son titre</li>
            <input type="text" placeholder="Exemple : Avenger 4" value={this.state.titleAdd} onChange={this.handleChangeAdd} />
            <br />
            <button className="btn" onClick={this.sendData} > Send </button>
            <br />
            <li> Suprimer un film avec son ID</li>
            <input type="text" placeholder="Exemple : tt1201607" value={this.state.titleDel} onChange={this.handleChangeDel} />
            <br />
            <button className="btn" onClick={this.delData} > Send </button>
            <br />
            <li> Liste de tous les films</li>
            <button className="btn" onClick={this.display} > Display liste </button>
            <button className="btn" onClick={this.close} > Close X</button>
            <DataList display={this.state.display} data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;