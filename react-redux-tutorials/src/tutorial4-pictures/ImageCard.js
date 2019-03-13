import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    state = { span: 0 };

    componentDidMount() {
        // console.log(this.imageRef.current);
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        console.log(height);
        const span = Math.ceil(height / 10 + 1);
        this.setState({ span })
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.span}` }}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        )
    }
}

export default ImageCard;
