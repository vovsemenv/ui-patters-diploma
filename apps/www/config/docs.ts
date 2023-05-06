import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Figma",
      href: "/figma",
    },
    {
      title: "GitHub",
      href: "https://github.com/shadcn/ui",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/shadcn",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Паттерны",
      items: [
        {
          title: "Аккордеон",
          href: "/docs/components/accordion",
          items: [],
        },
        {
          title: "Оповещение",
          href: "/docs/components/alert",
          label: "New",
          items: [],
        },
        {
          title: "Аватар",
          href: "/docs/components/avatar",
          items: [],
        },
        {
          title: "Бейдж",
          href: "/docs/components/badge",
          label: "New",
          items: [],
        },
        {
          title: "Кнопка",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Календарь",
          href: "/docs/components/calendar",
          label: "New",
          items: [],
        },
        {
          title: "Карточка",
          href: "/docs/components/card",
          label: "New",
          items: [],
        },
        {
          title: "Чекбокс",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          title: "Поле со списком",
          href: "/docs/components/combobox",
          items: [],
        },
        {
          title: "Контекстное меню",
          href: "/docs/components/context-menu",
          items: [],
        },
        {
          title: "Поле выбора даты",
          href: "/docs/components/date-picker",
          items: [],
        },
        {
          title: "Диалоговое окно",
          href: "/docs/components/dialog",
          items: [],
        },
        {
          title: "Выпадающее меню",
          href: "/docs/components/dropdown-menu",
          items: [],
        },
        {
          title: "Поле ввода",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "Лебл",
          href: "/docs/components/label",
          items: [],
        },
        {
          title: "Менюбар",
          href: "/docs/components/menubar",
          items: [],
        },
        {
          title: "Навигационное меню",
          href: "/docs/components/navigation-menu",
          items: [],
        },
        {
          title: "Прогресс",
          href: "/docs/components/progress",
          items: [],
        },
        {
          title: "Радио-группа",
          href: "/docs/components/radio-group",
          items: [],
        },
        {
          title: "Скелетон",
          href: "/docs/components/skeleton",
          label: "New",
          items: [],
        },
        {
          title: "Ползунок",
          href: "/docs/components/slider",
          items: [],
        },
        {
          title: "Переключатель",
          href: "/docs/components/switch",
          items: [],
        },
        {
          title: "Текстовая область",
          href: "/docs/components/textarea",
          items: [],
        },
        {
          title: "Всплывающая подсказка",
          href: "/docs/components/tooltip",
          items: [],
        },
      ],
    },
  ],
}
