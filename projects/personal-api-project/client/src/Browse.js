import React from 'react';
import {withProvider} from './QuestionsProvider';
import DisplayAll from './DisplayAll'
import searchIcon from './searchIcon.png' 

class Browse extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clickedValue: '',
            matchedQuestions: [],
            matched: false,
            answerMatched: false,
            input: '',
            searched: false
        }
    }
    componentDidMount(){
        this.props.getQuestions()
        
    }

    setClickedValue = (value) => {
        value = value.toUpperCase()
        const matchedQuestions = []
        const filteredQuestions = this.props.qAndA.filter(question => {
                for(let i = 0; i < question[1].length; i++){
                    if(question[1][i].toUpperCase().search(value) === 0){
                        matchedQuestions.push(question)
                        this.setState({answerMatched: true})
                    }
                }
                if(!this.state.answerMatched){
                    if(question[0].toUpperCase().search(value) === 0){
                        matchedQuestions.push(question)
                    }else if(question[2].toUpperCase().search(value) === 0){
                        matchedQuestions.push(question)
                    }else if(question[3].toUpperCase().search(value) === 0){
                        matchedQuestions.push(question)
                    }else if(question[4].toUpperCase().search(value) === 0){
                        matchedQuestions.push(question)
                    }
                    
                }
            return matchedQuestions
        })
        if(matchedQuestions.length > 0){
            this.setState({matchedQuestions: matchedQuestions, matched: true, searched: true})
        }else{
            this.setState({matched: false, searched: true})
            console.log(this.state.matched)
        }
        console.log(this.state.matched)
        return filteredQuestions
    }

    updateInput = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    render () {
        return(
            <>
                <div className="browsePage">
                    <div className='searchBar'>
                        <input className='input' placeholder='Key Word' value={this.state.input} name='input' onChange={this.updateInput} type="text"/>
                        <img className="searchButton" onClick={() => {this.setClickedValue(this.state.input)}} src={searchIcon} alt=""/>
                    </div>
                    <div className='searchCategories'>
                        <div className='categoryTitles'>
                            <div className='title1'>Categories </div>
                            <div className='title2'>Difficulty </div>
                            <div className='title3'>Type</div>
                        </div>
                        <div className='categoryItems'>
                            <div className='browseColumn1'>
                                <div onClick={() => {this.setClickedValue('Art')}}>Art</div>
                                <div onClick={() => {this.setClickedValue('General Knowledge')}}>General Knowledge</div>
                                <div onClick={() => {this.setClickedValue('Geography')}}>Geography</div>
                                <div onClick={() => {this.setClickedValue('History')}}>History</div>
                                <div onClick={() => {this.setClickedValue('Math')}}>Math</div>
                                <div onClick={() => {this.setClickedValue('Politics')}}>Politics</div>
                                <div onClick={() => {this.setClickedValue('Science & Nature')}}>Science & Nature</div>
                                <div onClick={() => {this.setClickedValue('Sports')}}>Sports</div>
                                <div onClick={() => {this.setClickedValue('Technology')}}>Technology</div>
                                <div onClick={() => {this.setClickedValue('Vehicles')}}>Vehicles</div>
                            </div>
                            <div className='browseColumn2'>
                                <div onClick={() => {this.setClickedValue('easy')}}>Easy</div>
                                <div onClick={() => {this.setClickedValue('medium')}}>Medium</div>
                                <div onClick={() => {this.setClickedValue('hard')}}>Hard</div>
                            </div>
                            <div className='browseColumn3'>
                                <div onClick={() => {this.setClickedValue('multiple')}}>Multiple Choice</div>
                                <div onClick={() => {this.setClickedValue('boolean')}}>True/False</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.searched ? 
                        (this.state.matched ? 
                            this.state.matchedQuestions.map((question, i) => <DisplayAll key={i+i} question={question}/>)
                        :
                            <div className="sorry">Sorry, no questions match your search at this time!!!</div>
                        )
                    :
                    this.props.qAndA.map((question, i) => <DisplayAll key={i} question={question}/>)
                    }
                </div>
            </>
        )
    }
}




export default withProvider(Browse)