import {
  NotFoundCon,
  NotFoundCard,
  NotFoundImg,
  NotFoundHead,
  NotFoundPara,
} from './styledCompoents'

const NotFound = () => (
  <NotFoundCon>
    <NotFoundCard>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <NotFoundHead>Page Not Found</NotFoundHead>
      <NotFoundPara>
        We are sorry, the page you requested could not be found
      </NotFoundPara>
    </NotFoundCard>
  </NotFoundCon>
)

export default NotFound
