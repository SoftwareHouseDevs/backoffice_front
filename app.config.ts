export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    button: {
      default: {
        size: 'lg',
        color: 'primary',
        variant: 'solid',
        class: 'bg-[#2CD3A9] hover:bg-[#22C49C] text-white'
      }
    },
    input: {
      default: {
        size: 'lg',
        color: 'gray',
        variant: 'outline',
        padding: 'lg',
        class: 'bg-[#1C2127] border-0 text-white placeholder-gray-400'
      }
    },
    card: {
      background: 'white',
      shadow: 'lg',
      rounded: 'xl'
    }
  }
})