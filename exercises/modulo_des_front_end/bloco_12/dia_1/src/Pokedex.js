import React from 'react';
import Pokemon from './Pokemon';
import ButtonNext from './ButtonNext';
import ButtonChange from './ButtonChange';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);

        this.nextPokemon = this.nextPokemon.bind(this);
        this.createListTypesPokemon = this.createListTypesPokemon.bind(this);
        this.renderButtonTypes = this.renderButtonTypes.bind(this);
        this.changeTypePokemon = this.changeTypePokemon.bind(this);

        this.state = {
            current: 0,
            length: props.pokemons.length,
            pokemon: props.pokemons[0],
            pokemonsCurrent: props.pokemons,
            types: this.createListTypesPokemon(),
            typeCurrent: 'All',
        }

    }

    createListTypesPokemon = () => {
        const pokemons = this.props.pokemons;
        const types = ['All'];
        pokemons.forEach(pokemon => {
            if(!types.includes(pokemon.type)) {
                types.push(pokemon.type);
            }
        });
        return types;
    };

    buttonDisable(value, target) {
        const getSelect = document.querySelectorAll('.off');
        if(getSelect.length > 0) {
            getSelect[0].className = 'on';
            getSelect[0].disabled = false;
        }
        
        if (target.value !== 'All') {
            target.disabled = true;
            target.className = 'off';
        }
    }

    changeTypePokemon(event) {
        const { value } = event.target;
        const { pokemons } = this.props;
        let filterPokemons = '';

        this.buttonDisable(value, event.target);

        if(value !== 'All'){
            filterPokemons = pokemons.filter((pokemon) => (
                pokemon.type === value    
            ));
            this.setState({ 
                pokemonsCurrent: filterPokemons, 
                length: filterPokemons.length,
                typeCurrent: value,
            });
        } else {
            this.setState({ 
                pokemonsCurrent: pokemons, 
                length: pokemons.length,
                typeCurrent: value,  
            });
        }
        this.setState((state) => { return { pokemon: state.pokemonsCurrent[0] } });
    };
    
    nextPokemon() {
        if(this.state.current + 1 < this.state.length) {
            this.setState((state) => { return { current: state.current + 1 } });
            this.setState((state) => { return { pokemon: this.state.pokemonsCurrent[state.current] } });
        } else {
            this.setState(() => { return { current: 0 } });
            this.setState((state) => { return { pokemon: this.state.pokemonsCurrent[state.current] } });
        }
    }

    renderButtonTypes() {
        const { types } = this.state;
        return types.map((type) => {
            return <ButtonChange key={ type } changeTypePokemon={ this.changeTypePokemon } type={ type } />;
        });
    }

    render() {
        return (
            <div className="pokedex">
                <Pokemon pokemon={ this.state.pokemon } />
                { this.renderButtonTypes() }
                <ButtonNext nextPokemon={ this.nextPokemon } />
            </div>
        );
    }
}

export default Pokedex;
