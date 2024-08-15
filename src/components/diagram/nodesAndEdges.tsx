import { type Node, type Edge, MarkerType } from "reactflow";
import { type NodeData } from "./customNodes";

export const initialNodes: Node<NodeData>[] = [
  {
    id: "university",
    data: {
      label: "Universidad Nacional de La Matanza",
      ports: ["left", "right", "top", "bottom"],
      type: "institution",
    },
    position: {
      x: -80,
      y: 40,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "platzi",
    data: {
      label: "Platzi",
      ports: ["left", "right", "top", "bottom"],
      type: "institution",
    },
    position: {
      x: -80,
      y: 160,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  //////////////////////////////////////////////////////////////
  {
    id: "dpssoftware",
    data: {
      label: "DPS Software",
      ports: ["left", "right", "top", "bottom"],
      type: "job",
      className: "border-dps",
    },
    position: {
      x: 220,
      y: 100,
    },
    type: "jobNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "dps_projects",
    data: {
      label: "DPS Software",
      ports: ["left"],
      type: "job",
    },
    position: {
      x: 520,
      y: -140,
    },
    type: "parentNode",
    style: {
      width: 500,
      height: 220,
    },
  },
  {
    id: "seatcontrol",
    data: {
      label: "SeatControl",
      ports: ["left", "right", "top", "bottom"],
      type: "project",
    },
    parentId: "dps_projects",
    position: {
      x: 20,
      y: 20,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "topper",
    data: {
      label: "Topper",
      ports: ["left", "right", "top", "bottom"],
      type: "project",
    },
    parentId: "dps_projects",
    position: {
      x: 260,
      y: 20,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "dpslanding",
    data: {
      label: "DPS Landing",
      ports: ["left", "right", "top", "bottom"],
      type: "project",
    },
    parentId: "dps_projects",
    position: {
      x: 20,
      y: 120,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "siggalanding",
    data: {
      label: "SIGGA Landing",
      ports: ["left", "right", "top", "bottom"],
      type: "project",
    },
    parentId: "dps_projects",
    position: {
      x: 260,
      y: 120,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "dps_knowledge",
    data: {
      label: "DPS Software",
      ports: ["left"],
      type: "job",
    },
    position: {
      x: 520,
      y: 100,
    },
    type: "parentNode",
    style: {
      width: 500,
      height: 420,
    },
  },
  {
    id: "maps",
    data: {
      label: "Maps",
      ports: ["left", "right", "top", "bottom"],
      type: "knowledge",
    },
    parentId: "dps_knowledge",
    position: {
      x: 20,
      y: 20,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "diagrams",
    data: {
      label: "Diagrams",
      ports: ["left", "right", "top", "bottom"],
      type: "knowledge",
    },
    parentId: "dps_knowledge",
    position: {
      x: 260,
      y: 20,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "websockets",
    data: {
      label: "Websockets",
      ports: ["left", "right", "top", "bottom"],
      type: "knowledge",
    },
    parentId: "dps_knowledge",
    position: {
      x: 20,
      y: 120,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "serversentevents",
    data: {
      label: "Server Sent Events",
      ports: ["left", "right", "top", "bottom"],
      type: "knowledge",
    },
    parentId: "dps_knowledge",
    position: {
      x: 260,
      y: 120,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "charts",
    data: {
      label: "Charts",
      ports: ["left", "right", "top", "bottom"],
      type: "knowledge",
    },
    parentId: "dps_knowledge",
    position: {
      x: 20,
      y: 220,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "statehandlers",
    data: {
      label: "State Handlers",
      ports: ["left", "right", "top", "bottom"],
      type: "knowledge",
    },
    parentId: "dps_knowledge",
    position: {
      x: 260,
      y: 220,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "notifications",
    data: {
      label: "Notifications",
      ports: ["left", "right", "top", "bottom"],
      type: "knowledge",
    },
    parentId: "dps_knowledge",
    position: {
      x: 20,
      y: 320,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  //////////////////////////////////////////////////////////////
  {
    id: "freelance",
    data: {
      label: "Freelance",
      ports: ["left", "right", "top", "bottom"],
      type: "job",
      className: "border-freelance border-b-4",
    },
    position: {
      x: 220,
      y: 680,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "freelance_projects",
    data: {
      label: "Freelance Projects",
      ports: ["left"],
      type: "job",
    },
    position: {
      x: 520,
      y: 560,
    },
    type: "parentNode",
    style: {
      width: 500,
      height: 120,
    },
  },
  {
    id: "misideaspintadas",
    data: {
      label: "Mis Ideas Pintadas",
      ports: ["left", "right", "top", "bottom"],
      type: "project",
    },
    parentId: "freelance_projects",
    position: {
      x: 20,
      y: 20,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "freelance_knowledge",
    data: {
      label: "DPS Software",
      ports: ["left"],
      type: "job",
    },
    position: {
      x: 520,
      y: 700,
    },
    type: "parentNode",
    style: {
      width: 500,
      height: 220,
    },
  },
  {
    id: "golang",
    data: {
      label: "Golang",
      ports: ["left", "right", "top", "bottom"],
      type: "knowledge",
    },
    parentId: "freelance_knowledge",
    position: {
      x: 20,
      y: 20,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "mysql",
    data: {
      label: "MySQL",
      ports: ["left", "right", "top", "bottom"],
      type: "knowledge",
    },
    parentId: "freelance_knowledge",
    position: {
      x: 260,
      y: 20,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "awsec2instances",
    data: {
      label: "AWS EC2 Instances",
      ports: ["left", "right", "top", "bottom"],
      type: "knowledge",
    },
    parentId: "freelance_knowledge",
    position: {
      x: 20,
      y: 120,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
  {
    id: "googlesearchconsole",
    data: {
      label: "Google Search Console",
      ports: ["left", "right", "top", "bottom"],
      type: "knowledge",
    },
    parentId: "freelance_knowledge",
    position: {
      x: 260,
      y: 120,
    },
    type: "defaultNode",
    style: {
      width: 220,
      height: 80,
    },
  },
];

export const initialEdges: Edge[] = [
  {
    id: "university-dpsdpssoftware",
    source: "university",
    target: "dpssoftware",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    type: "default",
    style: { strokeWidth: 2 },
  },
  {
    id: "platzi-dpssoftware",
    source: "platzi",
    target: "dpssoftware",
    sourceHandle: "right",
    targetHandle: "left",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    type: "default",
    style: { strokeWidth: 2 },
  },
  {
    id: "dpssoftware-dps_projects",
    source: "dpssoftware",
    target: "dps_projects",
    sourceHandle: "right",
    targetHandle: "left",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    type: "default",
    style: { strokeWidth: 2 },
  },
  {
    id: "dpssoftware-dps_knowledge",
    source: "dpssoftware",
    target: "dps_knowledge",
    sourceHandle: "right",
    targetHandle: "left",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    type: "default",
    style: { strokeWidth: 2 },
  },

  {
    id: "dpssoftware-freelance",
    source: "dpssoftware",
    target: "freelance",
    sourceHandle: "bottom",
    targetHandle: "top",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    type: "default",
    style: { strokeWidth: 2 },
  },
  {
    id: "freelance-freelance_projects",
    source: "freelance",
    sourceHandle: "right",
    target: "freelance_projects",
    targetHandle: "left",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    type: "default",
    style: { strokeWidth: 2 },
  },
  {
    id: "freelance-freelance_knowledge",
    source: "freelance",
    target: "freelance_knowledge",
    sourceHandle: "right",
    targetHandle: "left",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    type: "default",
    style: { strokeWidth: 2 },
  },
];
