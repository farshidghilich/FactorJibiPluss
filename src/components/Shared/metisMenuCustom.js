const metisMenu = [
  {
    id: "main",
    label: "منو اصلی",
  },
  {
    id: 1,
    icon: "icon-home",
    label: "صفحه ادمین",
    to: "/",
    content: [
      {
        id: 2,
        label: "میز کار من",
        to: "/",
      },
      {
        id: 3,
        label: "انالیز وب",
        to: "/dashboard4",
      },
      {
        id: 4,
        label: "مانیتورینگ شبکه",
        to: "/dashboard5",
      },
      {
        id: 5,
        label: "وضعیت سرور",
        to: "/dashboard6",
      },
      {
        id: 6,
        label: "وضعیت فروش",
        to: "/dashboard7",
      },
      {
        id: 7,
        label: "مدریت کاربران",
        to: "/dashboard9",
      },
      // {
      //   id: 9,
      //   label: "University Analytics",
      //   to: "/dashboard10",
      // },
      {
        id: 10,
        label: "وضعیت فروشگاه",
        to: "/dashboard11",
      },
    ],
  },
  {
    id: 11,
    icon: "icon-speedometer",
    label: "میز کار",
    to: "/dashboard12",
  },
  // {
  //   id: "app",
  //   label: "App",
  // },
  {
    id: 12,
    icon: "fa fa-group",
    label: " مشتریان",
    to: "/",
    content: [
      {
        id: 13,
        label: "لیست مشتریان",
        to: "/customer-list",
      },
      {
        id: 14,
        label: "ثبت مشتریان",
        to: "/customer-insert",
      },
    ],
  },
  {
    id: 80,
    icon: "fa fa-shopping-cart",
    label: " محصولات",
    to: "/",
    content: [
      {
        id: 50,
        label: "وضعیت محصولات",
        to: "/products",
      },
      {
        id: 200,
        label: "ثبت محصولات",
        to: "/products-insert",
      },
    ],
  },
  {
    id: 500,
    icon: "icon-book-open",
    label: " فروشگاه",
    to: "/",
    content: [
      {
        id: 501,
        label: "مدیریت فروشگاه ها",
        to: "/shop",
      },
      {
        id: 502,
        label: "ثبت فروشگاه",
        to: "/shop-insert",
      },
    ],
  },
  {
    id: 15,
    icon: "icon-envelope",
    label: "ایمیل",
    to: "/app-inbox",
  },
  {
    id: 16,
    icon: "icon-bubbles",
    label: "پشتیبانی",
    to: "/app-chat",
  },
  {
    id: 17,
    icon: "fa fa-list-ul",
    label: "فاکتور	",
    to: "/",
    content: [
      {
        id: 18,
        label: "صدور فاکتور",
        to: "/invoice_insert",
      },
      {
        id: 19,
        label: " لیست فاکتور",
        to: "/page-invoices",
      },
    ],
  },
  {
    id: 21,
    icon: "fa fa-usd",
    label: "گردش حساب",
    to: "/app-calendar",
  },
  // {
  //   id: "ui",
  //   label: "UI Elements",
  // },
  // {
  //   id: 22,
  //   icon: "icon-tag",
  //   label: "Icons",
  //   to: "/",
  //   content: [
  //     {
  //       id: 23,
  //       label: "FontAwesome",
  //       to: "/ui-icons",
  //     },
  //   ],
  // },
  // {
  //   id: 26,
  //   icon: "icon-diamond",
  //   label: "Components",
  //   to: "/",
  //   content: [
  //     {
  //       id: 27,
  //       label: "Bootstrap UI",
  //       to: "/ui-bootstrap",
  //     },
  //     {
  //       id: 28,
  //       label: "Typography",
  //       to: "/ui-typography",
  //     },
  //     {
  //       id: 72,
  //       label: "Colors",
  //       to: "/ui-colors",
  //     },
  //     {
  //       id: 73,
  //       label: "Buttons",
  //       to: "/ui-buttons",
  //     },
  //     {
  //       id: 29,
  //       label: "Tabs",
  //       to: "/tabs",
  //     },
  //     {
  //       id: 30,
  //       label: "Progress Bars",
  //       to: "/progressbars",
  //     },
  //     {
  //       id: 31,
  //       label: "Modals",
  //       to: "/modals",
  //     },
  //     {
  //       id: 32,
  //       label: "Notifications",
  //       to: "/notifications",
  //     },
  //     {
  //       id: 74,
  //       label: "Dialogs",
  //       to: "/ui-dialogs",
  //     },
  //     {
  //       id: 75,
  //       label: "List Group",
  //       to: "/ui-list-groups",
  //     },
  //     {
  //       id: 76,
  //       label: "Media Object",
  //       to: "/ui-media-object",
  //     },
  //     {
  //       id: 77,
  //       label: "Nestable",
  //       to: "/ui-nestable",
  //     },

  //     {
  //       id: 33,
  //       label: "Range Sliders",
  //       to: "/ui-range-sliders",
  //     },
  //   ],
  // },
  // {
  //   id: 34,
  //   icon: "icon-pencil",
  //   label: "Forms",
  //   to: "/",
  //   content: [
  //     {
  //       id: 35,
  //       label: "Basic Elements",
  //       to: "/form/Form-basic",
  //     },
  //     {
  //       id: 36,
  //       label: "Advanced Elements",
  //       to: "/form/form-advanced",
  //     },
  //     {
  //       id: 37,
  //       label: "Form Validation",
  //       to: "/form/form-validation",
  //     },
  //     {
  //       id: 38,
  //       label: "Form Wizard",
  //       to: "/form/form-wizard",
  //     },
  //     {
  //       id: 39,
  //       label: "Summernote",
  //       to: "/form/form-summernote",
  //     },
  //     {
  //       id: 40,
  //       label: "Drag & Drop Upload",
  //       to: "/form/form-dragdropupload",
  //     },
  //     {
  //       id: 41,
  //       label: "CKEditor",
  //       to: "/form/form-editors",
  //     },
  //     {
  //       id: 43,
  //       label: "Image Cropping",
  //       to: "/form/form-cropping",
  //     },
  //   ],
  // },
  // {
  //   id: 44,
  //   icon: "icon-layers",
  //   label: "Tables",
  //   to: "/",
  //   content: [
  //     {
  //       id: 45,
  //       label: "Normal Tables",
  //       to: "/table/table-normal",
  //     },
  //     {
  //       id: 46,
  //       label: "Jquery Datatables",
  //       to: "/table/table-jquery-datatable",
  //     },
  //     {
  //       id: 47,
  //       label: "Table Filter",
  //       to: "/table/table-filter",
  //     },
  //     {
  //       id: 48,
  //       label: "Editable Tables",
  //       to: "/table/table-editable",
  //     },
  //     {
  //       id: 49,
  //       label: "Table dragger",
  //       to: "/table/table-dragger",
  //     },
  //     {
  //       id: 50,
  //       label: "Tables Color",
  //       to: "/table/table-color",
  //     },
  //   ],
  // },
  // {
  //   id: 51,
  //   icon: "icon-pie-chart",
  //   label: "Charts",
  //   to: "/",
  //   content: [
  //     {
  //       id: 52,
  //       label: "Apex Charts",
  //       to: "/chart/chart-apex",
  //     },
  //   ],
  // },
  // {
  //   id: 53,
  //   icon: "icon-map",
  //   label: "jVector Map",
  //   to: "/app-jVector-map",
  // },
  // {
  //   id: "extra",
  //   label: "Extra",
  // },
  // {
  //   id: 54,
  //   icon: "icon-puzzle",
  //   label: "Widgets",
  //   to: "/widgets",
  // },
  {
    id: 55,
    icon: "icon-lock",
    label: "کامپوننت های  من",
    to: "/",
    content: [
      {
        id: 56,
        label: "صفحه ورود",
        to: "/login",
      },
      {
        id: 57,
        label: "صفحه ثبت نام",
        to: "/signup",
      },
      {
        id: 58,
        label: "فراموشی رمز",
        to: "/forgotpassword",
      },
      {
        id: 59,
        label: "خطا۴۰۴ ",
        to: "/notfound",
      },
      {
        id: 60,
        label: "بروزرسانی",
        to: "/maintenance",
      },
    ],
  },
  // {
  //   id: 61,
  //   icon: "icon-docs",
  //   label: "Pages",
  //   to: "/",
  //   content: [
  //     {
  //       id: 62,
  //       label: "Page Blank",
  //       to: "/page-blank",
  //     },
  //     {
  //       id: 63,
  //       label: "Page Profile",
  //       to: "/page-profile",
  //     },
  //     {
  //       id: 64,
  //       label: "Page User List",
  //       to: "/page-user-list",
  //     },
  //     {
  //       id: 65,
  //       label: "Page Testimonials",
  //       to: "/page-testimonials",
  //     },
  //     {
  //       id: 66,
  //       label: "Page Invoices",
  //       to: "/page-invoices",
  //     },
  //     {
  //       id: 67,
  //       label: "Page Timeline",
  //       to: "/page-timeline",
  //     },
  //     {
  //       id: 68,
  //       label: "Page Search Results",
  //       to: "/page-search-results",
  //     },
  //     {
  //       id: 69,
  //       label: "Page Gallery",
  //       to: "/page-gallery",
  //     },
  //     {
  //       id: 70,
  //       label: "Page Pricing",
  //       to: "/page-pricing",
  //     },
  //     {
  //       id: 71,
  //       label: "Page Coming Soon",
  //       to: "/page-coming-soon",
  //     },
  //   ],
  // },
];

export default metisMenu;
