import React, { Component } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import Widjet1 from './Widjets/Widjet1/Widjet1';
import Widjet2 from './Widjets/Widjet2/Widjet2';
import Widjet3 from './Widjets/Widjet3/Widjet3';
import Widjet4 from './Widjets/Widjet4/Widjet4';
import Widjet5 from './Widjets/Widjet5/Widjet5';
import Widjet6 from './Widjets/Widjet6/Widjet6';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        let data = [{"id":"tt1201607","movie":"Harry Potter and the Deathly Hallows: Part 2","yearOfRelease":"15 Jul 2011","duration":"130 min","actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","poster":"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"96%"},{"id":"tt1825683","movie":"Black Panther","yearOfRelease":"16 Feb 2018","duration":"134 min","actors":"Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira","poster":"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"96%"},{"id":"tt4154796","movie":"Avengers: Endgame","yearOfRelease":"26 Apr 2019","duration":"181 min","actors":"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth","poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"94%"},{"id":"tt6857112","movie":"Us","yearOfRelease":"22 Mar 2019","duration":"116 min","actors":"Lupita Nyong'o, Winston Duke, Elisabeth Moss, Tim Heidecker","poster":"https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"93%"},{"id":"tt1979376","movie":"Toy Story 4","yearOfRelease":"21 Jun 2019","duration":"100 min","actors":"Tom Hanks, Tim Allen, Annie Potts, Tony Hale","poster":"https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"97%"},{"id":"tt4925292","movie":"Lady Bird","yearOfRelease":"01 Dec 2017","duration":"94 min","actors":"Saoirse Ronan, Laurie Metcalf, Tracy Letts, Lucas Hedges","poster":"https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"99%"},{"id":"tt0228746","movie":"Pretty Women","yearOfRelease":"10 Aug 1944","duration":"10 min","actors":"Red River Dave, Ann Parker, Red River Boys","poster":"N/A","boxOffice":"N/A","rottenTomatoesScore":"N/A"},{"id":"tt0499549","movie":"Avatar","yearOfRelease":"18 Dec 2009","duration":"162 min","actors":"Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang","poster":"https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"82%"},{"id":"tt0034583","movie":"Casablanca","yearOfRelease":"23 Jan 1943","duration":"102 min","actors":"Humphrey Bogart, Ingrid Bergman, Paul Henreid, Claude Rains","poster":"https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"99%"},{"id":"tt0110912","movie":"Pulp Fiction","yearOfRelease":"14 Oct 1994","duration":"154 min","actors":"Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta","poster":"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"92%"},{"id":"N/A","movie":"N/A","yearOfRelease":"N/A","duration":"N/A","actors":"N/A","poster":"N/A","boxOffice":"N/A","rottenTomatoesScore":"N/A"},{"id":"tt0047478","movie":"Seven Samurai","yearOfRelease":"19 Nov 1956","duration":"207 min","actors":"Toshirô Mifune, Takashi Shimura, Keiko Tsushima, Yukiko Shimazaki","poster":"https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"100%"},{"id":"N/A","movie":"N/A","yearOfRelease":"N/A","duration":"N/A","actors":"N/A","poster":"N/A","boxOffice":"N/A","rottenTomatoesScore":"N/A"},{"id":"tt0105236","movie":"Reservoir Dogs","yearOfRelease":"02 Sep 1992","duration":"99 min","actors":"Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn","poster":"https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"92%"},{"id":"N/A","movie":"N/A","yearOfRelease":"N/A","duration":"N/A","actors":"N/A","poster":"N/A","boxOffice":"N/A","rottenTomatoesScore":"N/A"},{"id":"N/A","movie":"N/A","yearOfRelease":"N/A","duration":"N/A","actors":"N/A","poster":"N/A","boxOffice":"N/A","rottenTomatoesScore":"N/A"},{"id":"tt0266697","movie":"Kill Bill: Vol. 1","yearOfRelease":"10 Oct 2003","duration":"111 min","actors":"Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah","poster":"https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"85%"},{"id":"tt0816692","movie":"Interstellar","yearOfRelease":"07 Nov 2014","duration":"169 min","actors":"Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow","poster":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"72%"},{"id":"tt1853728","movie":"Django Unchained","yearOfRelease":"25 Dec 2012","duration":"165 min","actors":"Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington","poster":"https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"87%"},{"id":"tt1392190","movie":"Mad Max: Fury Road","yearOfRelease":"15 May 2015","duration":"120 min","actors":"Tom Hardy, Charlize Theron, Nicholas Hoult, Hugh Keays-Byrne","poster":"https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"97%"},{"id":"tt1375666","movie":"Inception","yearOfRelease":"16 Jul 2010","duration":"148 min","actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy","poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","boxOffice":"N/A","rottenTomatoesScore":"87%"}];

        this.state = { data: data }
    }
    render() {
        return (
            <div className="container-dashboard">
                <div className="container-dashboard-top">
                    <div className="container-dashboard-topchild">
                        <Widjet1 data={this.state.data} />
                    </div>
                    <div className="container-dashboard-topchild">
                        <Widjet2 />
                    </div>
                    <div className="container-dashboard-topchild">
                        <Widjet3 data={this.state.data} />
                    </div>
                </div>
                <div className="container-dashboard-bot">
                    <div className="container-dashboard-botchild"></div>
                    <div className="container-dashboard-botchild"></div>
                    <div className="container-dashboard-botchild"></div>
                </div>
            </div>
        );
    }
}

export default Dashboard;