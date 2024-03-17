import DashboardHeader from "./components/header/DashboardHeader"
import DashboardSidebar from "./components/sidebar/DashboardSidebar"
import DashboardSidebarToggle from "./components/sidebar/DashboardSidebarToggle"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <DashboardHeader />
            <DashboardSidebarToggle />
            <DashboardSidebar />
            <main className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">{children}</main>
        </section>
    )
}