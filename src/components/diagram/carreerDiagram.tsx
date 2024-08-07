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
import { Equal, Plus, Search } from "lucide-react";
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
          <div className="flex w-fit -translate-x-4 items-center gap-0.5 fill-primary/80 text-primary/80 opacity-0 transition-all delay-300 group-hover:-translate-x-0 group-hover:opacity-100">
            <Search className="size-6" />
            <Equal className="size-5 stroke-2" />
            <CTRL className="size-8" />
            <Plus className="size-5 stroke-2" />
            <Scroll className="-ml-1 size-8" />
          </div>
        </Panel>
      </ReactFlow>
    </ReactFlowProvider>
  );
};
