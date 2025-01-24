import AuthTemplate from "../template/authTemplate"

export default function Page() {
    const currentPage: string = "mapping"
    return <AuthTemplate currentPage={currentPage}></AuthTemplate>
}