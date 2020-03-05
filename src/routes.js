import React from 'react';

const SchedulerPage = React.lazy(()=>import("./views/HomePage"));
const TablePage = React.lazy(()=>import("./views/TablePage"));

const routes = [
    { path: "/", exact: true, name: "Scheduler", component: SchedulerPage },
    { path: "/scheduler", exact: true, name: "Scheduler", component: SchedulerPage },
    { path: "/table", exact: true, name: "Table", component: TablePage },
];

export default routes;
