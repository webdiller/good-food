export interface SharedButtonProps {
  classNames?: string
  size?: "default" | "sm" | "lg"
  variant?: "fill-primary" | "fill-secondary" | "fill-pink"
  children: React.ReactNode
  [x: string]: any
}
