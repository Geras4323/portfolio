import ReactFlow, {
  Background,
  BackgroundVariant,
  Panel,
  ReactFlowProvider,
  type Edge,
  type Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { ParentNode, type NodeData, JobNode, DefaultNode } from "./customNodes";
import { initialNodes, initialEdges } from "./nodesAndEdges";
import { useState } from "react";
import { CTRL } from "public/special/ctrl";
import { BriefcaseBusiness, Equal, Plus, Search } from "lucide-react";
import { Scroll } from "public/special/scroll";

const nodeTypes = {
  defaultNode: DefaultNode,
  parentNode: ParentNode,
  jobNode: JobNode,
};

export const CareerDiagram = () => {
  const [nodes] = useState<Node<NodeData>[]>(initialNodes);
  const [edges] = useState<Edge[]>(initialEdges);

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        zoomOnScroll={false}
        proOptions={{ hideAttribution: true }}
        preventScrolling={false}
        fitView
        snapToGrid
        snapGrid={[20, 20]}
        minZoom={0.35}
        // translateExtent={[
        //   [-680, -100],
        //   [1200, 1100],
        // ]}
        deleteKeyCode={["Backspace", "Delete"]}
        zoomOnDoubleClick={false}
        //
        edgesUpdatable={false}
        edgesFocusable={false}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        draggable={false}
        elementsSelectable={false}
        className="group"
      >
        <Background
          gap={20}
          color="#f1f1f130"
          variant={BackgroundVariant.Dots}
        />

        <Panel position="top-left">
          <div className="flex h-8 items-center justify-center gap-2 self-center rounded-full bg-secondary/15 px-4 shadow-md backdrop-blur-sm">
            <BriefcaseBusiness className="size-5 min-w-5" />
            <span className="text-lg uppercase">Professional Career</span>
          </div>
        </Panel>

        <Panel position="bottom-left">
          <div className="flex h-8 w-fit -translate-x-4 items-center gap-0.5 rounded-full bg-secondary/15 fill-primary/80 px-2 py-1 text-primary/80 opacity-0 backdrop-blur-sm transition-all delay-300 group-hover:-translate-x-0 group-hover:opacity-100">
            <Search className="size-5" />
            <Equal className="size-4 stroke-2" />
            <CTRL className="size-7" />
            <Plus className="size-4 stroke-2" />
            <Scroll className="-ml-1 size-7" />
          </div>
        </Panel>
      </ReactFlow>
    </ReactFlowProvider>
  );
};
