import React, { useState } from 'react';
import Data from './data.js';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
const myStyles = makeStyles({
    quote: {
        color: 'wheat'
    }
});
const Review = () => {
    const classes = myStyles();
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = Data[index];
    const handleSubmitLeft = () => {
        if (index > 0)
            return setIndex(index - 1)

    }
    const handleSubmitRight = () => {
        if (index < (Data.length - 1))
            return setIndex(index + 1)
    }
    const handleSubmitRandom = () => {
        const randomPeople = parseInt(Math.random() * Data.length);
        return setIndex(randomPeople);
    }
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className="quote-icon">
                    <FormatQuoteIcon className={classes.quote} />
                </span>
            </div>
            <h4 className="auther">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <Button className="prev-btn" onClick={handleSubmitLeft}>
                    <KeyboardArrowLeftIcon color="primary" />
                </Button>
                <Button className="next-btn" onClick={handleSubmitRight}>
                    <KeyboardArrowRightIcon />
                </Button>
            </div>
            <Button variant="outlined" color="primary" onClick={handleSubmitRandom}
            className="random-btn">
                Random
                </Button>
        </article>
        // <Container>
        // <div className='img-container'>
        //     <img src={image} alt={name} className='person-img' />
        // </div>
        // </Container>
    )
}
export default Review;