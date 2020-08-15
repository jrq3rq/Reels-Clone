import React, { useState, useRef } from "react";
import "./VideoCard.css";

function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      //stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="video__player"
        src="https://s3.us-east-1.amazonaws.com/www.jamesrrs.me/1VIDEOS/Inside4Ds-jul102019.MP4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FSl7lbF6bwaMDyTQCBlfJEFd6NnOeUb9ujtYHTGhLsAIgW9Ev4vvZM0mtA283xO72OlC8YH0gWMn3MdA3%2FFKNTaUq5AIIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgwwNjMwMjc1MjYzMjIiDN5%2FhXi15xaqn5zPxCq4AopW7xNQEzSZupomkWbVh7B6vKVvvYNopy0TtqwEEpleLzpULHci3X6dfxPPk18PgzWNNpSEYMranq4gUDBM1%2FxoNhfkX5kL6D6Ssfo%2Fa7JEZ%2FcUJuhBw%2Bn0v%2BDfvwyFpup%2Bjm%2BnXf7eOAEEKzq6dRoPXW5yAGY4ktdF%2F%2BQBQq%2F7BWK6y2IrtyPIT16r2c9DnfGFlFMMGE9Sm9Wf3ybNm9WsXKVGBl8atgn8TitXt0mGU4PadPlQMmAld%2BTiufubSMnjL2Hjcc6ootnuMimSThZRQBSQtKi5i3JBgHRT4%2B5J0RCkr1C5OnWk9miT%2B%2FiEPOhzHj10njPRZdwmqoLLxCx2jcVdXhwCzSV9bWASOxtQXQvXSOv0j7%2BAxwYxFQfM1CBKQwrjBwhV5ohH9dWFUuU1AM6VVEDasjC7o9z5BTqwAgqUnI5csTioJbWL21IvMAtGhySxeUmXzFKQSAeARmjaOl8HHIhQ5Ke4wqDZtZs%2FqLRZZFMOKTpe3O70txiB9wwUlsi4rlCM6a2xddkUnNfK3bNGaxabHfPK3zdfdfr3bCg9Q%2Fzt972alh%2FYPus7V2EmlMkNcnPKRl47IsxTKcyhhiigOMz2%2BxtpCJ8XyQK8H1CJ5yXS3KPLjieAY9yz80nncWTaMDtDMCz%2BqfYol45y9a0vey%2BB8sGLf%2B41ORd2dBO5J2e06xBNUlF5bF08CpkpvAVd2OcZY2IvcSbukZMLegBQyi6jlJKzSS3hSGLlgYNq05HqP6fvJrje6SXjkgEl2aM5CEzCQ%2FOdoARIh%2B2xMVsjNh1xnACnK6BEBqizdxo2RQcvfoDR6oGVTF8JnFA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200815T005336Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ5LF3XKZLG2JZ563%2F20200815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ebe8e1994d7291b436e995421d31a14b2a0c28714555b635407950d60017ed3e"
        alt="IG reel video"
        loop
      />
    </div>
  );
}

export default VideoCard;
