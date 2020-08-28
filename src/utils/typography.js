import Typography from "typography"
import bootstrapTheme from "typography-theme-bootstrap"

bootstrapTheme.overrideThemeStyles = () => {
	return {}
}

const typography = new Typography(bootstrapTheme)

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
