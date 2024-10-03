export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='container'>
      <main className='main-layout'>{children}</main>
    </div>
  )
}
