"use client"

import * as React from "react"
import {
    IconCamera,
    IconChartBar,
    IconDashboard,
    IconDatabase,
    IconFileAi,
    IconFileDescription,
    IconFileWord,
    IconFolder,
    IconHelp,
    IconInnerShadowTop, IconLighter,
    IconListDetails,
    IconReport,
    IconSearch,
    IconSettings,
    IconUsers, IconWifi,
} from "@tabler/icons-react"

import {NavDocuments} from "@/components/layout/nav-documents"
import {NavMain} from "@/components/layout/nav-main"
import {NavSecondary} from "@/components/layout/nav-secondary"
import {NavUser} from "@/components/layout/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
    user: {
        name: "Admin",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Tổng quan hệ thống",
            url: "#",
            icon: IconDashboard,
        },
        {
            title: "Quản lý dữ liệu",
            url: "#",
            icon: IconListDetails,
        },
        {
            title: "Báo cáo",
            url: "#",
            icon: IconChartBar,
        },
        {
            title: "CẢNH BÁO KHẨN CẤP",
            url: "#",
            icon: IconChartBar,
        },
        {
            title: "Quản lý cư dân",
            url: "#",
            icon: IconUsers,
        },
    ],
    navClouds: [
        {
            title: "Capture",
            icon: IconCamera,
            isActive: true,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Proposal",
            icon: IconFileDescription,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Prompts",
            icon: IconFileAi,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Cài đặt",
            url: "#",
            icon: IconSettings,
        },
        {
            title: "Hỗ trợ",
            url: "#",
            icon: IconHelp,
        },
        {
            title: "Tìm kiếm",
            url: "#",
            icon: IconSearch,
        },
    ],
    documents: [
        {
            name: "Led",
            url: "/dashboard/led",
            icon: IconLighter,
        },
        {
            name: "Wi-Fi",
            url: "#",
            icon: IconWifi,
        },
        {
            name: "Cảm biến nhiệt",
            url: "/dashboard/temp",
            icon: IconFileAi,
        },
        {
            name: "Cảm biến khói",
            url: "#",
            icon: IconFileDescription,
        },
        {
            name: "LCD",
            url: "#",
            icon: IconFileAi,
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <a href="#">
                                <IconInnerShadowTop className="!size-5"/>
                                <span className="text-base font-semibold">Fas</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                <NavDocuments items={data.documents}/>
                <NavSecondary items={data.navSecondary} className="mt-auto"/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
        </Sidebar>
    )
}
