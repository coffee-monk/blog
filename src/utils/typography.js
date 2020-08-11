import Typography from "typography"
import bootstrapTheme from "typography-theme-bootstrap"

bootstrapTheme.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: `none`,
      textDecoration: `none`,
    },
    h4: {
      margin: `0px`,
    },
    h3: {
      margin: `0px`,
    },
    h2: {
      margin: `0px`,
    },
    h1: {
      margin: `0px`,
    },
  }
}

const typography = new Typography(bootstrapTheme)

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
